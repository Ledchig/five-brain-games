#!/usr/bin/env node
import brainGame from '../src/index.js';
import { taskOfGame, getQuestsAndAnswers } from '../src/games/brain-even.js';

brainGame(taskOfGame, getQuestsAndAnswers());
