import sys

import requests


def send_discord_notification(status, repo):
    webhook_url = "https://discord.com/api/webhooks/1410243931106443295/101suhkAvT4uRkVv2px9dMTUvAkyy9lKwvMzUcKTqANwdmRumND4M5xI_yeb6GjkkPg3"

    color = 65280 if status == "success" else 16711680  # Green or Red
    message = {
        "embeds": [
            {
                "title": f"CI Test {'Passed' if status == 'success' else 'Failed'}",
                "description": f"Build for [cypress-components]({repo})",
                "color": color,
            }
        ]
    }

    response = requests.post(webhook_url, json=message)
    response.raise_for_status()


if __name__ == "__main__":
    status = sys.argv[1]  # "success" or "failure"
    repo = "https://github.com/Mage84/cypress-components.git"

    send_discord_notification(status, repo)
