
class Document { //INTERFACE
    constructor(content) {
        this.content = content;
    }

    render() {
        throw new Error("render must implement");
    }
}

class PdfDocument extends Document { // CONCRETE PRODUCTS
    render() {
        console.log(`rendering PDF: "${this.content}"`);
    }
}

class WordDocument extends Document {
    render() {
        console.log(`rendering Word file : "${this.content}"`);
    }
}


class DocumentCreator{ // CREATOR INTERFACE

    createDocument(){
        throw new Error("createDoc must implement");
    }

    openDocument(content){
        const doc = this.createDocument(content);
        doc.render();
    }

}

// CONCRETE CREATORS
class PdfCreator extends DocumentCreator {
    createDocument(content) {
        return new PdfDocument(content);
    }
}

class WordCreator extends DocumentCreator {
    createDocument(content) {
        return new WordDocument(content);
    }
}

const pdfCreator = new PdfCreator();
pdfCreator.openDocument("Annual Report 2024");

const wordCreator = new WordCreator();
wordCreator.openDocument("Meeting Minutes");



