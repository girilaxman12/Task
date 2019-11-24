import React, {Component} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: [
                { value: "Default Text One", label: "Default Text One"}, 
                {value: " Longer Default Text One",label: " Longer Default Text One"},
                {value: "Very very long Default Text",label: "Very very long Default Text"}
                ]
        }
    }

    render() {
        const animatedComponents = makeAnimated();
        const colourStyles = {
            container: styles => ({
                ...styles,
                display: 'inline-block',
                width: '500px',
                marginLeft:'350px',
                textAlign: 'left',
                border: '2px blue',
            }),
            option: (styles, {data, isDisabled, isFocused, isSelected}) => ({
                ...styles,
                backgroundColor: '#90ee90',
                borderRadius: '10px',
                padding: "7px",
                margin: "5px",
                color: "black",
                width: "40%",
                textAlign: 'center',
                display: 'inline-block',
                fontSize: '16px',
                cursor: 'Pointer',
            }),
            multiValue: (styles) => (
                {
                    ...styles,
                    color: "black",
                    float: 'left',
                    backgroundColor: "white",
                    borderRadius: "11px",
                    border: "2px solid green",
                }
            ),
            multiValueLabel: (styles) => (
                {
                    ...styles,
                    color: "black",
                }
            ),

            multiValueRemove: (styles) => (
                {
                    ...styles,
                    color: "white",
                    margin: "1px",
                    float: 'right',
                    marginLeft: "10px",
                    borderRadius: "15px",
                    backgroundColor: 'black',
                    border: "1px solid black",
                    cursor: 'pointer',

                }
            ),
		menu: (styles) => (
                {
                    ...styles,
                    width: '100%',
                    padding: "10px",
                    border: "1px red"
                }),
               
            valueContainer: (styles) => ({
                ...styles,
               minHeight: '1px',
                fontSize: "18px",
                width:"2px",
                
                paddingTop: '0',
                display: "block",
                paddingBottom: '0',
    
            
            }),
            clearIndicator: (styles) => ({
                ...styles,
                minHeight: '1px',
                color: 'black',
                cursor: 'pointer'
            }),
            
            

        }

      return (
            
                <Select
                    closeMenuOnSelect={false}
                    allowCreate={true}
                    options={this.state.dropDown}
                    isMulti
                    components={animatedComponents}  
                    styles={colourStyles}
                />

        );
    }
}

export default App;
