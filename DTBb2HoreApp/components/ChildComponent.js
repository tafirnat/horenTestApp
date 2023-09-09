import ButtonComponent from './buttons/Button.js'
console.log('YY',ButtonComponent)

const ChildComponent = {
    template: `
        <div>
            <h2>Child Component</h2>
            <p>Bu bir alt bileşendir.</p>
            ${ButtonComponent.temp({name:"test",bgColor:"bg-green-500", hoverBg:"bg-sky-500"})}
        </div>
    `
};

//           ${ButtonComponent.temp({name:"test",bgColor:"bg-green-500", hoverBg:"bg-sky-500"})}


// Bileşeni dışarıya ihraç edin
export default ChildComponent;
