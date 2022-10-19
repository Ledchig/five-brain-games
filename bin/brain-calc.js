#!/usr/bin/env node
import brainGame from '../index.js';
import { taskOfGame, getQuestsAndAnswers } from '../src/games/brain-calc.js';

brainGame(taskOfGame, getQuestsAndAnswers());
