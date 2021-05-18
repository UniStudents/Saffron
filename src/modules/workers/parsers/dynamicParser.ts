import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";

export default class dynamicParser {

    /**
     * This method uses a custom function made from the user
     * and returns a map containing the requested announcements.
     *
     * @param instructions How does the parser gonna parse the html content.
     * @param amount How much article to withdraw.
     * @return Map<Number,Article> The articles.
     */
    public static async parse(instructions: Instructions, amount: Number = 10): Promise<Map<Number, Article>> {
        let parsedArticles = new Map<Number, Article>();

        return parsedArticles
    }
}