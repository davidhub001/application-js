var send_chatgpt = document.getElementById("send_chatgpt");
var demande_chatgpt = document.getElementById("demande_chatgpt");

// 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
class Api {
    constructor(apiKey, model, messages, temp, maxTokens) {
        this.url = "https://api.openai.com/v1/chat/completions";
        this.apiKey = apiKey;
        this.model = model; // Ajoutez le modèle ici, par exemple, "gpt-4.0-turbo"
        this.messages = messages;
        this.temp = temp;
        this.maxTokens = maxTokens;
    }

    async getJson(input) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.apiKey
            },
            body: JSON.stringify({
                "model": this.model, // Utilisez le modèle ici
                "messages": this.messages,
                "temperature": parseFloat(this.temp),
                "max_tokens": parseInt(this.maxTokens),
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        };

        try {
            const response = await fetch(this.url, requestOptions);
            const data = await response.json();
            var robot_text = data.choices[0].message.content;

            var robot = document.createElement("div");
            robot.setAttribute("class","robot p-1");
            input.appendChild(robot);

             // Fonction pour ajouter l'effet de typewriter
            function typeWriterEffect(text, element, speed) {
                let i = 0;
                const delay = speed; // Vitesse de dactylographie en millisecondes

                function type() {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(type, delay);
                    }
                }

                type();
            }

            // Appliquez l'effet de typewriter au texte du robot
            typeWriterEffect(robot_text, robot, 50); // 50 millisecondes de délai entre chaque caractère


        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

// Exemple d'utilisation avec le modèle GPT-4





send_chatgpt.onclick = function(){
    if(demande_chatgpt.value.length >0){
        var result_gpt = document.getElementById("result_gpt");
        var user = document.createElement("div");
     
        user.setAttribute("class","user");
        user.textContent = demande_chatgpt.value;
        result_gpt.appendChild(user);

        const data = {
            apiKey: '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',
            model: "gpt-3.5-turbo-0301", // Spécifiez le modèle GPT-4 ici
            messages: [
                { role: "user", content: demande_chatgpt.value }
            ],
            temp: 1,
            maxTokens: 1024
        };
        const api = new Api(data.apiKey, data.model, data.messages, data.temp, data.maxTokens);
        api.getJson(result_gpt);
        demande_chatgpt.value ="";
    }else{
        console.log("tsy misy texte ")
    }
}