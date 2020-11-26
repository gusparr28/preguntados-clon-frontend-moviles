import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

import axios from 'axios';

import { questionsStyles } from '../styles/screens/Questions';

const Questions = () => {

    const [questions, setQuestions] = useState([]);
    const [shuffledAnswer, setShuffledAnswer] = useState([]);
    const [orderedAnswer, setOrderedAnswer] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPressed, setIsPressed] = useState(false);
    const [score, setScore] = useState(0);

    const fetchApi = async () => {
        let res = await axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
        setQuestions(res.data.results);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    useEffect(() => {
        if (questions.length > 0) {
            questions.map(question => {
                setShuffledAnswer(oldValue => [...oldValue, { answer: [question.correct_answer, ...question.incorrect_answers] }])
            })
        }
    }, [questions])

    useEffect(() => {
        if (shuffledAnswer.length > 0) {
            setOrderedAnswer(shuffledAnswer.map(value => value.answer.sort(() => Math.random() - 0.5)))
        }
    }, [shuffledAnswer])

    const renderItem = () => {
        return (
            <View style={questionsStyles.container}>
                <Text>{questions[currentIndex].question}</Text>
                {orderedAnswer[currentIndex].map((value) => {
                    return (
                        <Button onPress={() => {
                            setIsPressed(true)
                            if (questions[currentIndex].correct_answer === value) {
                                setScore(score + 1)
                            }
                        }} color={isPressed ? questions[currentIndex].correct_answer === value ? (
                            'green'
                        ) : 'red' : null} title={value} />
                    )
                })}
            </View>
        )
    }

    return (
        <View style={questionsStyles.container}>
            <View>
                {orderedAnswer.length > 0 ? renderItem() : <ActivityIndicator size="large" />}
            </View>
            <View>
                <View>
                    <Button onPress={() => {
                        setCurrentIndex(currentIndex + 1)
                        setIsPressed(false)
                    }} title="Next" />
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>Score: {score}</Text>
                </View>
            </View>
        </View>
    )
}

export default Questions;