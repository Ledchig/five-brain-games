#!/usr/bin/env node
import brainGame from '../index.js';
import { taskOfGame, getQuestsAndAnswers } from '../src/games/brain-progression.js';

brainGame(taskOfGame, getQuestsAndAnswers());
