exports.handler = async (event) => {
    
    const {
      TranscribeClient,
      StartTranscriptionJobCommand,
    } = require("@aws-sdk/client-transcribe");

    const client = new TranscribeClient({ region: "REGION" });
    const params = {
        TranscriptionJobName: "MANGO_VOICETOTEXT",
        LanguageCode: "en-US", // For example, 'en-US'
        MediaFormat: "wav", // For example, 'wav'
        Media: {
            MediaFileUri: "https://www2.cs.uic.edu/~i101/SoundFiles/preamble.wav",
            // For example, "https://transcribe-demo.s3-REGION.amazonaws.com/hello_world.wav"
        },
    };

    const run = async () => {
        try {
            const data = await client.send(new StartTranscriptionJobCommand(params));
            console.log("Success - put", data);
        } catch (err) {
            console.log("Error", err);
        }
    };
    await run();
    

    // // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    // return response;
};
