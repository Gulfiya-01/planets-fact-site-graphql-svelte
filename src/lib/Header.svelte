<script lang="ts">
    import "../routes/global.css";
    type Planet= {
        planets:PlanetData[];
    };
    type PlanetData = {
        id: number;
        name: string;
    };
        export let data:Planet;
    
    </script>
    
    <header>
        <nav class="navbar">
            <div class="logo-container">
                <h2>THE PLANETS</h2>
            </div>
                <ul class="planet-list">
                    {#each data.planets as planet}
                        <li class="planet-item">
                            <span class="list">
                                <a href="/{planet.id}"
                                    >{planet.name}
                                </a>
                            </span>
                        </li>
                    {/each}
                </ul>
            </nav>
    </header>
    
    <style>
    
    
        .logo-container {
            text-align: center;
        }
        a {
            color: #fff;
        }

        ul li::after {
            border-top: 1px solid #ffffff;
            opacity: 0.05; 
            content: '';
            position: absolute;
            top: 25%;
            left: 0;
            width: 100%;
            height: 0.0625rem;
        }
    
        .planet-item {
            font-family: Spartan;
            font-size: 0.6875rem;
            font-weight: 700;
            opacity: 0.75;
            line-height: 1.5625rem;
            letter-spacing: 0.0625rem;
            text-transform: uppercase;
        }
        h2 {
            color: #fff;
            text-transform: uppercase;
            font-family: Antonio;
        }
    
        .planet-list {
            display: flex;
            flex-direction: row;
            list-style: none;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            margin-top: 2.44rem;
        }
        .list a {
            font-family:Spartan;
            font-size: 0.6875rem;
            font-weight: 700;
            line-height: 1.5625rem;
            letter-spacing: 0.0625rem;
            text-transform: uppercase;
            text-decoration: none;
        }
        @media only screen and (min-width: 1024px) {
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
            ul li:active {
                opacity: unset;
                border-top: 3px solid #419EBB;
            }
            .planet-list li:nth-child(1):active {
                border-top: 3px solid hsl(194, 48%, 49%);
            }
            .planet-list li:nth-child(2):active {
                border-top: 3px solid hsl(33, 82%, 61%);
            }
            .planet-list li:nth-child(3):active {
                border-top: 3px solid hsl(263, 67%, 51%);
            }
            .planet-list li:nth-child(4):active {
                border-top: 3px solid hsl(10, 63%, 51%);
            }
            .planet-list li:nth-child(5):active {
                border-top: 3px solid hsl(2, 68%, 53%); 
            }
            .planet-list li:nth-child(6):active {
                border-top: 3px solid hsl(17, 73%, 46%);
            }
            .planet-list li:nth-child(7):active {
                border-top: 3px solid hsl(169, 73%, 44%);
            }
            .planet-list li:nth-child(8):active {
                border-top: 3px solid hsl(222, 87%, 56%);
            }
            .logo-container {
                display: flex;
                align-items: center;
            }
    
            .planet-list {
                margin-top: 0rem;
                color: #fff;
                font-family: Spartan;
            }
            ul li::after {
                top: 10%;
            }
        }
    
        @media only screen and (max-width: 765px) /**mobile*/ {
    
            .list {
                font-size: 0.985rem;
    
                letter-spacing: 0.08525rem;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .planet-list {
                align-items: flex-start;
                margin-top: 2.75rem;
                padding: 0rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 2.6rem;
                list-style: none;
            }
    
            h2 {
                font-size: 1.75rem;
                font-weight: 400;
                letter-spacing: -0.06563rem;
            }
    
            .list {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
            .planet-item a {
                display: flex;
                align-items: center;
            }
    
            .navbar {
                background-color: #070724;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
            }
    
            h2::after,
            h2::before {
                content: '';
                position: absolute;
                margin-top: 3rem;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: rgb(158, 146, 146);
                opacity: 0.2;
            }
            nav {
                display: none;
            }
        
    
            .list::after {
                content: '';
                position: absolute;
                top: 5.7rem;
                left: 0;
                opacity: 0.1;
                width: 100%;
                height: 0.0625rem;
                background-color: hsla(0, 0%, 100%, 1); /* Line color */
            }
    
    
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #fff;
                font-family: Spartan;
                font-size: 0.9375rem;
                font-weight: 700;
                line-height: 1.5625rem;
                letter-spacing: 0.08525rem;
                text-transform: uppercase;
            }
            ul li:active {
                border-top: none;
            }
        }
    </style>
    