import { charactersInfo } from '../constants/characters';

export const getCharacterPicture = (id = 0, type, index) => {
    return Object.values(charactersInfo).find(character => character.id === id)?.pictures[type]?.[index] ?? '';
}