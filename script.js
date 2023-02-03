var buttons = document.querySelectorAll("#container-buttons")
var operationButtons = document.querySelectorAll("#taltaltal")

function calculator([buttons]) {
    
}

const edit = document.querySelector("body")
edit.innerHTML = `<div class="tela">
<h1>Projeto DOS PIKA</h1>
</div>
<div class="calculadora">
     <h1>Calculadora</h1>
     <p  id="resultado"></p>
     <table>
         <tr>
             <td><button>C</button></td>
             <td><button><</button></td>
             <td><button>/</button></td>
             <td><button>X</button></td>
         </tr>
         <tr>
            <td><button>7</button></td>
            <td><button>8</button></td>
            <td><button>9</button></td>
            <td><button>-</button></td>
        </tr>
        <tr>
            <td><button>4</button></td>
            <td><button>5</button></td>
            <td><button>6</button></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <td><button>1</button></td>
            <td><button>2</button></td>
            <td><button>3</button></td>
            <td><button></button></td>
        </tr>
     </table>
</div>
<style>
        {
            margin: 50%;
            padding: 50%;
        }
        .tela{
            background-image: linear-gradient(45deg,black, green);
        }
    </style>
`