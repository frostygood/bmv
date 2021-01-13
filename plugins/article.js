import { article } from "seo";
export default (app, inject) => {
    inject('get_article', article)
}