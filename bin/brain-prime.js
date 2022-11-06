#!/usr/bin/env node
import { brainGame } from '../src/index.js';
import { taskOfGame, getQuestsAndAnswers } from '../src/games/brain-prime.js';

brainGame(taskOfGame, getQuestsAndAnswers());
