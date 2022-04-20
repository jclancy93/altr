declare global {
    ethereum: any;
    namespace JSX {
        interface IntrinisicElements {
            'model-viewer': { me: string }
        }
    }
}