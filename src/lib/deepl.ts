import * as deepl from "deepl-node";

const authKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY as string;
export const translator = new deepl.Translator(authKey);
