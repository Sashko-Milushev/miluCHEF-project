import { html } from '../../lib.js'

const contactTemplate = (onSubmit) => html`
    <section>
        <div class="contact">
            <h2>Emai:</h2>
            <h3>milushev.sashko@gmail.com</h3>
            <h2>телефон:</h2>
            <h3>+359885392121</h3>           
        </div>
        <div>
            <form @submit=${onSubmit} class="submit-form">
                <h2>Имате нужда от помощ с някоя рецепта? Не се колебайте да ме попитате за каквото и да било!</h2>
                <label for="fname">Име</label>
                <input type="text" id="fname" name="firstname" placeholder="Име..">
                <label for="lname">Фамилия</label>
                <input type="text" id="lname" name="lastname" placeholder="Фамилия..">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email..">
                <label for="question">Запитване</label>
                <textarea id="question" name="question" placeholder="Попитайте.." style="height:170px"></textarea>
                <button type="submit">Прати</button>
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