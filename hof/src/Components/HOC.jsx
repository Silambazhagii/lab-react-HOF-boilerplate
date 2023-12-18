import React, { Component } from 'react'

export default class HOC extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        }
    }

    renderAllItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <>
                <li className='list_ele'>
                    <span>Id: {item.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Name: {item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>User Type: {item.user_type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </li>
            </>
        ));
        return mapRows;
    };
    renderBasedonUsertype = () => {
        const desireduserType = 'Designer';
        const data = this.state.userData;

        return data
            .filter(user => user.user_type === desireduserType)
            .map(user => {
                return (
                    <>
                        <li className='list_ele'>
                            <span>Id: {user.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>Name: {user.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>User Type: {user.user_type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </li>
                    </>
                );
            });
    };


    renderBasedOnFirstLetter = () => {
        const data = this.state.userData;
        const desiredFirstLetter = 'J'

        return data
            .filter((user) => user.name.charAt(0).toUpperCase() === desiredFirstLetter.toUpperCase())
            .map(user => {
                return (<>
                    <li className='list_ele'>
                        <span>Id: {user.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>Name: {user.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>User Type: {user.user_type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </li>
                </>)
            });
    };

    renderBasedOnAge = () => {
        const data = this.state.userData;
        const minAge = 28;
        const maxAge = 50;

        return data
            .filter(user => user.age >= minAge && user.age < maxAge)
            .map(user => (
                <>
                    <li className='list_ele'>
                        <span>Id: {user.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>Name: {user.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>User Type: {user.user_type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </li>
                </>
            ));
    };

    getTotalExperienceForDesigners = () => {
        const designersData = this.state.userData.filter(user => user.user_type === 'Designer');
        const totalExperience = designersData.reduce((acc, user) => acc + user.years, 0);
        return totalExperience;
      };



    render() {
        return (<>
            <h1>Display all items</h1>
            <div className="display-box">
                <ul>{this.renderAllItems()} </ul>
            </div>
            <h1>Display Designer items</h1>
            <div className="display-box">
                <ul>{this.renderBasedonUsertype()}</ul>
            </div>
            <h1>Display items starting with letter 'J'</h1>
            <div className="display-box">
                <ul>{this.renderBasedOnFirstLetter()}</ul>
            </div>
            <h1>Display items with age between 28 and 50</h1>
            <div className="display-box">
                <ul>{this.renderBasedOnAge()}</ul>
            </div>
            <h1>Total Experience of Designers: {this.getTotalExperienceForDesigners()} years</h1>
        </>);
    };
};
