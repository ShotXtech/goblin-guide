const STORAGE_KEY = "goblin-guide-inventory";

export const emptyUserInventory = {
    characters: {},
    weapons: {},
    artifacts: [],
};

export function loadUserInventory() {
    if (typeof window === "undefined") {
        return emptyUserInventory;
    }

    try {
        const savedInventory = localStorage.getItem(STORAGE_KEY);

        if (!savedInventory) {
            return emptyUserInventory;
        }

        return {
            ...emptyUserInventory,
            ...JSON.parse(savedInventory),
        };
    } catch (error) {
        console.error("Paimon failed to open the backpack:", error);

        return emptyUserInventory;
    }
}

export function saveUserInventory(inventory) {
    if (typeof window === "undefined") {
        return;
    }

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
    } catch (error) {
        console.error("Paimon failed to close the backpack:", error);
    }
}