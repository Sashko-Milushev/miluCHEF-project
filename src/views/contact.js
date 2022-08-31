import { html } from '../../lib.js'

const contactTemplate = (onSubmit) => html`
    <section>
        <div class="contact">
            <h3>Email:    milushev.sashko@gmail.com</h3>
            <h3>Телефон:    +359885392121</h3>           
        </div>
        <div>
            <form @submit=${onSubmit} class="submit-form">
                <h3>Имате нужда от помощ с някоя рецепта? Не се колебайте да ме попитате за каквото и да било!</h3>
                    <div class="column">
                        <label for="fname">Име</label>
                        <input type="text" id="fname" name="firstname" placeholder="Име..">
                        <label for="lname">Фамилия</label>
                        <input type="text" id="lname" name="lastname" placeholder="Фамилия..">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Email..">
                    </div>
                    <div class="column">
                    <label for="question">Запитване</label>
                    <textarea id="question" name="question" placeholder="Попитайте.." style="height:170px"></textarea>
                    <button type="submit">Прати</button>
                    </div>
                
                
            </form>
        </div>

    </section>
`

export function contactView(ctx) {
    ctx.render(contactTemplate(onSubmit))
    function onSubmit(event) {
        event.preventDefault()
        console.log('submit!');
    }
}