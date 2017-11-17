import * as React from 'react';

interface TeammateTypeProp {
    teammate: TeammateType;
}

interface TeammateType {
    name: string;
    position: string;
    role: string;
    email: string;
 }

const team: Array<TeammateType> = [
    {
        name: 'Christopher E. Mason, Ph.D.',
        position: 'Principal Investigator',
        role: 'Associate Professor',
        email: 'chm2042@med.cornell.edu'
    },
    {
        name: 'David C. Danko',
        position: 'Lead Developer',
        role: 'Ph.D. Student',
        email: 'dcd3001@med.cornell.edu'
    },
    {
        name: 'Cem Meydan, Ph.D.',
        position: 'Developer',
        role: 'Post-Doctoral Researcher',
        email: ''
    },
];

class Team extends React.Component {
    render() {
      return (
            <div>
                <h1>The Team</h1>
                <ul>
                {
                    team.map((teammate, index) => {
                        return (
                            <Teammate key={index} teammate={teammate} />
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Team;

class Teammate extends React.Component<TeammateTypeProp, {}> {
    private teammate: TeammateType;

    constructor(props: TeammateTypeProp) {
        super(props);

        this.teammate = this.props.teammate;
    }

    render() {
        return (
            <li>
                {this.teammate.name}<br />
                {this.teammate.position}<br />
                {this.teammate.role}<br />
                {this.teammate.email}
            </li>
        );
    }
}
