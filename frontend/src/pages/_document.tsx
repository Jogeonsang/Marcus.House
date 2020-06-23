import Document, {DocumentContext} from "next/document";
import {ServerStyleSheet} from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;


        try {
            ctx.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });
            };

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } catch (err) {
            throw err;
        } finally {
            sheet.seal();
        }
    }
};

export default CustomDocument;
