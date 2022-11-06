#!/usr/bin/env node
import { brainGame } from '../src/index.js';
import { taskOfGame, getQuestsAndAnswers } from '../src/games/brain-gcd.js';

brainGame(taskOfGame, getQuestsAndAnswers());
