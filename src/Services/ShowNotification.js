
import React, { useEffect } from 'react';

let currentIndex = 0;
export const showNotification = () => {

 const words = [{
    "_id": {
      "$oid": "654ad588affdddc819e0a965"
    },
    "word": "test",
    "meaning": "prueba",
    "usexample": "i wil test the code",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "654ad746cfc1dad6036bb208"
    },
    "word": "book",
    "meaning": "libro",
    "usexample": "I am reading a good book",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "654bec2f0213e8d5d164b1e4"
    },
    "word": "theory",
    "meaning": "teoria",
    "usexample": "Testing that theory begins Saturday night",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "654bed6e217450cd1985b2fc"
    },
    "word": "skill",
    "meaning": "habilidad",
    "usexample": "Many drivers panic about driving on the highway because they do not have the necessary skill or confidence.",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "654bef53c3333017f8bf376a"
    },
    "word": "flag",
    "meaning": "Bandera",
    "usexample": "The flag of Mexico is very beautiful",
    "__v": 0
  }]


  
  const currentWord = words[currentIndex];

  currentIndex = (currentIndex + 1) % words.length;

  
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(currentWord.word, {
      body: currentWord.meaning,
    });
  } else if ('Notification' in window && Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(currentWord.word, {
          body: currentWord.meaning,
        });
      }
    });
  }
};


