import { LitElement, html } from "lit-element";

export class AddBibliography extends LitElement {
  static get properties() {
    return {
      inputTitle: { type: String },
      inputAuthor: { type: String },
      inputYear: { type: String },
      inputPublisher: { type: String },
      bibliographyList: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.bibliographyList = [];
    this.inputTitle = "";
    this.inputAuthor = "";
    this.inputYear = "";
    this.inputPublisher = "";
    const storedData = localStorage.getItem("bibliographyList");
    this.bibliographyList = storedData ? JSON.parse(storedData) : [];
  }

  getStyles() {
    return html`
	<style>
	.mainContainer {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
		padding: 0 2rem;
      }

      .containerToAdd {
    	display: flex;
    	flex-direction: column;
		align-content: space-around;
    	align-items: center;
		border: solid 10px #bd998c;
    	border-radius: 20px;
    	width: 320px;
    	height: 300px;
    	margin-top: 20px;
		padding: 20px 0;
	}

      h2 {
        margin-bottom: 20px;
      }

      input {
        width: 80%;
        height: 30px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 5px;
      }

      button {
        width: 100px;
        height: 40px;
		font-size:16px;
        background: #bf6e51;
        color: #5b2424;
        border-radius: 6px;
        border-color: #5b2424;
        margin-top: 10px;
        cursor: pointer;
      }

      button:hover {
        background: #bf6e51;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin-top: 20px;
        text-align: left;
      }

      li {
        margin-bottom: 10px;
		text-align: center;
      }

      p {
        margin: 0;
      }

	  .lineBetweenBooks {
    	width: 50%;
		margin: 8px 0 12px;
    	border-bottom: 3px dotted black;
	  }

	  .bibliographyList{
		font-family: 'MedievalSharp', cursive;
		text-align: center;
		margin-top: 30px;
		display: flex;
    	flex-direction: column;
    	align-items: center;
	}

	@media all and (min-width: 768px) {
		.containerToAdd {
			width: 355px;
		}
	}

	@media all and  (min-width: 1200px){
		.mainContainer {
			display: flex;
			flex-direction: row;
    		align-content: stretch;
    		align-items: center;
			margin-bottom: 0;
		}

		.containerToAdd {
			width: 60%;
			height: 100%;
		}

		.bibliographyList {
			margin-left: 2rem;
		}
	}
	</style>
	`;
  }

  render() {
    return html`
	${this.getStyles()}
      <article class="mainContainer">
        <section class="containerToAdd">
          <h2>Listado bibliográfico</h2>
          <input
            type="text"
            id="inputTitle"
            placeholder="Título"
            value=${this.inputTitle}
            @change=${this.handleEventTitle}
          />
          <input
            type="text"
            id="inputAuthor"
            placeholder="Autor"
            value=${this.inputAuthor}
            @change=${this.handleEventAuthor}
          />
          <input
            type="text"
            id="inputYear"
            placeholder="Año"
            value=${this.inputYear}
            @change=${this.handleEventYear}
          />
          <input
            type="text"
            id="inputPublisher"
            placeholder="Editorial"
            value=${this.inputPublisher}
            @change=${this.handleEventPublisher}
          />
          <button @click=${this.handleButtonClick}>Añadir</button>
		  <button @click=${this.handleButtonDelete}>Eliminar</button>
  		</section>
        <section class="bibliographyList">
          <h2 class="titleList">- Bibliografía de referencia -</h2>
          <h3>
            Título: La España musulmana y los inicios de los reinos cristianos
            (711-1157)
          </h3>
          <p>Autor: ÁLVAREZ PALENZUELA, V. A.</p>
          <p>Año: 1991</p>
          <p>Editorial: Gredos</p>
		  <div class="lineBetweenBooks"></div>
          <h3>
            Título:Monarquía Feudal y Organización territorial: alfoces y
            merindades en Castilla (siglos X-XV)
          </h3>
          <p>Autor: ÁLVAREZ BORGE, I.</p>
          <p>Año: 1993</p>
          <p>Editorial: C.S.I.C</p>
		  <div class="lineBetweenBooks"></div>
		  	<div class="bibliographyList">
            	<ul>
              	${this.bibliographyList.map(
                	(item) => html`
                  	<li>
                   		<h3>Título:${item.title}</h3>
                    	<p>Autor:${item.author}</p>
                    	<p>Año:${item.year}</p>
                    	<p>Editorial:${item.publisher}</p>
						<div class="lineBetweenBooks"></div>
                  	</li>
                	`
              	)}
            	</ul>
          	</div>
		</section>
	</article>
    `;
  }

  handleEventTitle(e) {
    this.inputTitle = e.target.value;
  }

  handleEventAuthor(e) {
    this.inputAuthor = e.target.value;
  }

  handleEventYear(e) {
    this.inputYear = e.target.value;
  }

  handleEventPublisher(e) {
    this.inputPublisher = e.target.value;
  }

  handleButtonClick() {
    const bibliography = {
      title: this.inputTitle,
      author: this.inputAuthor,
      year: this.inputYear,
      publisher: this.inputPublisher,
    };

    this.bibliographyList = [...this.bibliographyList, bibliography];
    localStorage.setItem(
      "bibliographyList",
      JSON.stringify(this.bibliographyList)
    );
  }


handleButtonDelete(index){
	this.bibliographyList.splice(index, 1);
	this.requestUpdate();
	localStorage.setItem(
	  "bibliographyList",
	  JSON.stringify(this.bibliographyList)
	  );
	}

	createRenderRoot() {
		return this;
	  }
}

customElements.define("add-bibliography", AddBibliography);
