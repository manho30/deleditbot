const isArabic = (text) => {
    const regex = new RegExp(
    "[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]");
    return regex.test(text);
}

const isYoutube = (text) => {
    const regex = (/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/gmi);
    return regex.test(text)
} 

const textYoutube = () => Logger.log(isYoutube("https://youtu.be/nagnKs2QFDc"))