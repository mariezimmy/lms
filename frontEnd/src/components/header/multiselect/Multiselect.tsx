import React, { Component } from 'react'
import styles from './Multiselect.module.scss';

/* modified from multiselect-dropdown-react
 * link: https://www.npmjs.com/package/multiselect-dropdown-react
 */

interface IMultiselectState {
    checked: any[],
    dropDownValue: any[]
}

interface IMultiselectProps {
    options: any[],
    placeholder: string,
    onSelectOptions: (results: any) => void
}

export class Multiselect extends Component<IMultiselectProps, IMultiselectState> {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            dropDownValue: []
        }
        this.checkBox = this.checkBox.bind(this);
    }
    componentWillMount() {
        this.setState({
            dropDownValue: this.props.options
        });
    }
    removeChip(value: any) {
        this.checkBox(value, false);
    }
    checkBox(value: any, condition: any) {
        let checkedValue = this.state.checked;
        if (condition) {
            checkedValue.push(value);
        } else {
            let index = checkedValue.indexOf(value);
            checkedValue.splice(index, 1);
        }
        this.setState({
            checked: checkedValue
        }, () => {
            this.props.onSelectOptions(this.state.checked);
        });
    }
    searchFun(e: any) {
        if (e.target.value.length !== 0) {
            let enteredValue = e.target.value.toLowerCase();
            let presentValue = this.props.options.filter(function (data) {
                return data.name.indexOf(enteredValue) > -1;
            })
            this.setState({ dropDownValue: presentValue })
        } else {
            this.setState({ dropDownValue: this.props.options })
        }
    }
    returnChip() {
        const chip = this.state.checked ? this.state.checked.map((data, index) =>
            <div className={styles.chipBody} key={index}>
                <p className={styles.chipText}> {data}</p>
                <button className={styles.chipClose} onClick={e => this.removeChip(data)}>&times;</button>
            </div>
        ) : []
        return chip;
    }
    returnList() {
        const list = this.state.dropDownValue ? this.state.dropDownValue.map((data, index) =>
            <label className={styles.container} key={index}>{data.name}
                <input type="checkbox" value={data.value} onChange={e => this.checkBox(e.target.value, e.target.checked)} checked={this.state.checked.includes(data.value) ? true : false} />
                <span className={styles.checkmark}></span>
            </label>
        ) : null;
        return list;
    }
    render() {
        return (
            <div className={styles.multiselect}>
                <div className={styles.chup}>
                    {this.returnChip()}
                </div>
                <input type="text" name="Search" placeholder={this.props.placeholder} className={styles.inputBox} onChange={e => this.searchFun(e)} />
                <div className={styles.searchResult}>
                    <div className={styles.listResult}>
                        {this.returnList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Multiselect;
