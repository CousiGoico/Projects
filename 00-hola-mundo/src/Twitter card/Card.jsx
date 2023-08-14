import './card.css'

export function Card(){
    return (
        <article>
            <header>
                <img alt="Demo" src="https://cdn-icons-png.flaticon.com/512/5110/5110617.png"></img>
                <div>
                    <strong>Javier Cousiño</strong>
                    <span>@CousiGoico</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>

    )
}