using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;

    [SerializeField] int counter = 0;
    [SerializeField] int score = 0; // Variable de puntuación
    [SerializeField] int highScore = 0; // Variable para almacenar el high score

    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;

    // Variables para la UI
    [SerializeField] TMP_Text infoText;
    [SerializeField] TMP_Text scoreText; // Referencia al texto UI para mostrar la puntuación
    [SerializeField] TMP_Text highScoreText; // Referencia al texto UI para mostrar el high score

    // Cadena JSON falsa para simular los datos que vienen de la API
    public string apiData = @"
    {
        ""buttons"": [
            { ""id"": 0, ""r"": 1.0, ""g"": 0.0, ""b"": 0.5 },
            { ""id"": 1, ""r"": 0.0, ""g"": 0.8, ""b"": 0.8 },
            { ""id"": 2, ""r"": 0.7, ""g"": 0.9, ""b"": 0.1 },
            { ""id"": 3, ""r"": 0.3, ""g"": 0.7, ""b"": 0.2 },
            { ""id"": 4, ""r"": 0.9, ""g"": 0.6, ""b"": 0.1 },
            { ""id"": 5, ""r"": 0.5, ""g"": 0.4, ""b"": 0.9 }
        ]
    }
    ";

    [SerializeField] ColorButtons allButtons;

    void Start()
    {
        score = 0; // Inicializar la puntuación
        highScore = PlayerPrefs.GetInt("HighScore", 0); // Cargar el high score
        UpdateScoreText();
        UpdateHighScoreText();
        GetComponent<APIConnection>().GetData();
    }

    public void PrepareButtons()
    {
        allButtons = JsonUtility.FromJson<ColorButtons>(apiData);

        foreach (ColorButton buttonData in allButtons.buttons)
        {
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = new Color(buttonData.r, buttonData.g, buttonData.b);
            newButton.GetComponent<SimonButton>().Init(buttonData.id);
            newButton.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(buttonData.id));
            buttons.Add(newButton.GetComponent<SimonButton>());
        }

        AddToSequence();
    }

    public void RestartGame()
    {
        playerTurn = false;
        level = 0;
        counter = 0;
        score = 0; // Reiniciar la puntuación
        UpdateScoreText();
        sequence.Clear();
        AddToSequence();
    }

    public void ButtonPressed(int index)
    {
        if (playerTurn) {
            if (index == sequence[counter++]) {
                buttons[index].Highlight();
                if (counter == sequence.Count) {
                    playerTurn = false;
                    level++;
                    score += 10; // Incrementar la puntuación
                    UpdateScoreText(); // Actualizar la UI de la puntuación
                    counter = 0;
                    AddToSequence();
                }
            } else {
                playerTurn = false;
                Debug.Log("Game Over!");
                if (score > highScore) {
                    highScore = score;
                    PlayerPrefs.SetInt("HighScore", highScore); // Guardar el high score
                    UpdateHighScoreText(); // Actualizar la UI del high score
                }
                infoText.text = $"Game Over!\nYou cleared level {level}\nScore: {score}";
            }
        }
    }

    void AddToSequence()
    {
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        yield return new WaitForSeconds(delay * 0.5f);
        infoText.text = "CPU's turn";
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence) {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        playerTurn = true;
        infoText.text = "Player's turn";
    }

    void UpdateScoreText()
    {
        if (scoreText != null)
        {
            scoreText.text = $"Score: {score}";
        }
    }

    void UpdateHighScoreText()
    {
        if (highScoreText != null)
        {
            highScoreText.text = $"High Score: {highScore}";
        }
    }
}
