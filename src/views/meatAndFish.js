import { html } from '../../lib.js'

const meatAndFishTemplate = () => html`
    <section id="meatAndFish">
        <h1>
            Render meatAndFish
        </h1>

    </section>
`

export function meatAndFishView(ctx) {
    ctx.render(meatAndFishTemplate())
}