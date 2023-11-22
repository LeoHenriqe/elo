class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action")
        }
    }

    displaySucess(){
        this.form.innerHTML = this.settings.sucess;
    }

    displayError(){
        this.form.innerHTML = this.settings.error;
    }

    init() {
        if(this.form) this.formButton.addEventListener("click", () => this.displaySucess() );
        return this;
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button:"[data-button]",
    sucess:"<h1 class='sucess'>Mensagem enviada!</h1>",
    error:"<h1 class='error'>Não foi possivel enviar sua mensagem.</h1>",
});
FormSubmit.init();