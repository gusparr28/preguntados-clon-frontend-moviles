import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

import axios from 'axios';

const Questions = () => {

    const [questions, setQuestions] = useState([]);
    const [shuffledAnswer, setShuffledAnswer] = useState([])
    const [orderedAnswer, setOrderedAnswer] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPressed, setIsPressed] = useState(false)
    const [score, setScore] = useState(0)

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
            setOrderedAnswer(shuffledAnswer.map(valor => valor.answer.sort(() => Math.random() - 0.5)))
        }
    }, [shuffledAnswer])

    const renderItem = () => {
        return (
            <View>
                <Text>{questions[currentIndex].question}</Text>
                {orderedAnswer[currentIndex].map((valor) => {
                    return (
                        <Button onPress={() => {
                            setIsPressed(true)
                            if (questions[currentIndex].correct_answer === valor) {
                                setScore(score + 1)
                            }
                        }} color={isPressed ? questions[currentIndex].correct_answer === valor ? (
                            'green'
                        ) : 'red' : null} title={valor} />
                    )
                })}
            </View>
        )
    }

    return (
        <View>
            {  orderedAnswer.length > 0 ? renderItem() : <ActivityIndicator size="large" />}
            <Button onPress={() => {
                setCurrentIndex(currentIndex + 1)
                setIsPressed(false)
            }} title="Next" />
            <Text>Score: {score}</Text>
        </View>
    )
}

export default Questions;