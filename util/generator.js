import Generator from 'sequential-ids';

export const generator = new Generator({
    digits: 6, letters: 3,
    restore: "000"
});
