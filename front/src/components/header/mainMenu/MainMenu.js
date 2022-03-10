import './MainMenu.css'

const MainMenu = () => {
    return (
        <div>
            <nav>
                <ul className="main-menu">
                    <a href="/"><li>Picadas</li></a>
                    <a href="/"><li>Cervezas</li></a>
                    <a href="/"><li>Vinos</li></a>
                    <a href="/"><li>Copetin</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu