import React from 'react';
import env from "./../../env"


export const callGoogleVisionApi = async (base64) => {
   // console.log(base64);
    const postBody  = JSON.stringify({
        "requests": [
            {
                "image": {
                    "content": base64
                },
                "features": [
                    { "type": "WEB_DETECTION", "maxResults": 15 },
                    { "type": "LABEL_DETECTION", "maxResults": 15 },
                    { "type": "LOGO_DETECTION", "maxResults": 5 }
              
                ],
            }
        ]
    });
    // console.log(env.config.GC_VISION_API_URL + 'images:annotate?key=' + env.config.GC_API_KEY);
    //console.log(postBody);
    let googleVisionResp = await fetch(env.config.GC_VISION_API_URL + 'images:annotate?key=' + env.config.GC_API_KEY, {
        method: 'POST',
        body: postBody
    });
    // console.log(googleVisionResp)
    return googleVisionResp;
}

export const parseTextDetection = (txtObj) => {

    let textArray = txtObj.responses[0].fullTextAnnotation?.pages[0]?.blocks[0].paragraphs[0].words[0].symbols;
    let words = "";
    textArray && textArray.length > 0 && textArray.forEach(x => { 
        words = words + x.text
    });
    return words;

}

export const parseObjectDetection = (objectDetected) => {

   // console.log(objectDetected);
    let annotations = objectDetected.responses[0].localizedObjectAnnotations;
    let words = "";
    annotations && annotations.length > 0 && annotations.forEach(x => { 
        words = words +  ',' + x.name + "(" + Number(x.score).toFixed(2) * 100 + "%)\n"
    });
    return words;
}

export const parseLabelDetection = (labelsDetected) => {

   // console.log(labelsDetected);
    let labels = labelsDetected.responses[0].labelAnnotations;
    let words = "";
    labels && labels.length > 0 && labels.forEach(x => { 
        words = words + x.description + "(" + Number(x.score).toFixed(2) * 100 + "%)\n"
    });
    return words;
}

export const parseLogoDetection = (rawLogoJson) => {

   // console.log(rawLogoJson);
    let labels = rawLogoJson.responses[0].logoAnnotations;
    let words = "";
    labels && labels.length > 0 && labels.forEach(x => { 
        words = words + x.description && x.description + "(" + Number(x.score).toFixed(2) * 100 + "%)\n"
    });
    return words;
}

export const parseWebDetection = (rawWebJson) => {

     console.log(rawWebJson);
     let labels = rawWebJson.responses[0].webDetection.bestGuessLabels;
     let webEntities = rawWebJson.responses[0].webDetection.webEntities;
     let words = "";
     labels && labels.length > 0 && labels.forEach(x => { 
         words = words + x.label + "\n"
     });
     let webLabels = "";
     webEntities && webEntities.length > 0 && webEntities.forEach(x => { 
        webLabels = webLabels + x.description +  "(" + Number(x.score) * 100 + "%)\n"
     });

     return words + '\n' + webLabels;
 }

// export {callGoogleVisionApi, parseTextDetection};