import React, { useState } from 'react';
import "./Hero.css";
import data from '../../data.json';

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState(""); /* option 1 value */
    const [selectedData, setSelectedData] = useState([]); /* filter data based on option selection */
    const [selectedItem, setSelectedItem] = useState(null); /* item selection */
    const [selectedOption2, setSelectedOption2] = useState(""); /* option 2 value */
    const [selectedData2, setSelectedData2] = useState([]); /* filter data based on option selection */
    const [selectedItem2, setSelectedItem2] = useState(null); /* item selection */

	/* update selected option and data to display */
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedData(data.filter(item => item.LiqSol === event.target.value));
    }

	/* update item selection*/
    const handleSelectionChange = (event) => {
        const selected = selectedData.find(item => item.Name === event.target.value);
        setSelectedItem(selected);
    }

	/* update selected option and data to display */
    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
        setSelectedData2(data.filter(item => item.LiqSol === event.target.value));
    }

	/* update item selection*/
    const handleSelectionChange2 = (event) => {
        const selected2 = selectedData2.find(item => item.Name === event.target.value);
        setSelectedItem2(selected2);
    }

    return (
        <div className="dropdownContainer">
			{/* User selection - dropdown menus*/}
            <div className="dropdownSelections"> 
				<div className="dropdownItem1"> {/* User selection - first item*/}
					<select onChange={handleOptionChange}>
						<option value="">Select a category</option>
						<option value="Liquid">Beverage</option>
						<option value="Solid">Food</option>
					</select>
					<select disabled={!selectedOption} onChange={handleSelectionChange} className="bb1">
						<option value="">Select an item</option>
						{selectedData.map(item => <option key={item.ID} value={item.Name}>{item.Name}</option>)}
					</select>
				</div>
				<div className="dropdownItem2">
					<select onChange={handleOptionChange2}> {/* User selection - first item*/}
						<option value="">Select a category</option>
						<option value="Liquid">Beverage</option>
						<option value="Solid">Food</option>
					</select>
					<select disabled={!selectedOption2} onChange={handleSelectionChange2}>
						<option value="">Select an item</option>
						{selectedData2.map(item => <option key={item.ID} value={item.Name}>{item.Name}</option>)}
					</select>
				</div>
            </div>

			{/* Table - nutritional values*/}
            <div className="dropdownTable">
                <table>
                    <tbody>
                        {Object.keys(data[0]).filter(key => key !== "ID" && key !== "LiqSol").map((key) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{selectedItem ? selectedItem[key] : "/"}</td>
						<td>{selectedItem2 ? selectedItem2[key] : "/"}</td>
					</tr>
						))}
					</tbody>
				</table>
			</div>

	  	</div>
	);
}

export default Dropdown;