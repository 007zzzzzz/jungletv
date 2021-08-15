import { apiClient } from "./api_client";
import type { User } from "./proto/jungletv_pb";

export const copyToClipboard = async function (content: string) {
    try {
        await navigator.clipboard.writeText(content);
    } catch (err) {
        console.error("Failed to copy!", err);
    }
}

export const getReadableUserString = function(user: User): string {
    if (user.hasNickname()) {
        return user.getNickname();
    }
    return user.getAddress().substr(0, 14);
}

export const editNicknameForUser = async function (user: User) {
    let address = user.getAddress();
    let nickname = prompt("Enter new nickname, leave empty to remove nickname");
    if (nickname != "") {
        if ([...nickname].length < 3) {
            alert("The nickname must be at least 3 characters long.");
            return;
        } else if ([...nickname].length > 16) {
            alert("The nickname must be at most 16 characters long.");
            return;
        }
    }
    try {
        await apiClient.setUserChatNickname(address, nickname);
        if (nickname != "") {
            alert("Nickname set successfully");
        } else {
            alert("Nickname removed successfully");
        }
    } catch (e) {
        alert("Error editing nickname: " + e);
    }
}