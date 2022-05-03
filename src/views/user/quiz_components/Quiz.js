import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import QuizMain from './QuizMain';

const Quiz = () => {
    const [Quiz, setQuiz] = useState([
        {
            question: 'What drug falls under the indirect cholinomimetic class and requires pralidoxime as antidote for overdose?',
            options: ['Epinephrine', 'Edrophonium', 'Neostigmine', 'Echothiophate'],
            answer: '3'
        },
        {
            question: 'What is considered the most appropriate mechanism of action of indirect cholinomimetics',
            options: [
                'They bind to receptors inhibiting cholinergic agonist action',
                'They adhere strongly to acetylcholinesterase accelerating its action',
                'They simply bind to AchE inhibiting breakdown of acetylcholine',
                'Their mechanism of action is strongly unkown and incomprehensive'
            ],
            answer: '2'
        },
        {
            question: 'What receptors do adrenergic receptors act?',
            options: ['Y-receptors', 'Mu-receptors', 'alpha receptors', 'beta receptors'],
            answer: '1'
        },
        {
            question: 'What receptors do cholinergic receptors act?',
            options: ['Y-receptors', 'Mu-receptors', 'nicotinic receptors', 'beta receptors'],
            answer: '1'
        }
    ]);

    return (
        <div>
            <QuizMain quiz={Quiz} />
        </div>
    );
};
export default Quiz;
