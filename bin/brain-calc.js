#!/usr/bin/env node
import { brainGame } from '../src/index.js';
import { taskOfGame, getQuestsAndAnswers } from '../src/games/brain-calc.js';

brainGame(taskOfGame, getQuestsAndAnswers());
