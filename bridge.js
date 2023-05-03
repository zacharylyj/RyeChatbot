var prompt = require('readline-sync');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateAsGuest();

    const characterId = "qtEICpGfFS8f5Zr5kCHR1EsGsHlawNutYSZJq_IEZDY" // Discord moderator

    while (true) {
        var text = prompt.question('Enter prompt here: ')
        const chat = await characterAI.createOrContinueChat(characterId);
        const response = await chat.sendAndAwaitResponse(text, true)
        console.log(response);
    }
    // use response.text to use it in a string.
})();