import { html } from '../../lib.js'

const aboutTemplate = () => html`
    <section id="about">
        <img src="../src/images/profile.jpg" alt="profile picture" class="about-pic">

    </section>
`

export function aboutView(ctx) {
    ctx.render(aboutTemplate())
}