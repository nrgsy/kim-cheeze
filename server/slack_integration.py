import os
from slackclient import SlackClient
import pprint

# slack_token = os.environ["SLACK_API_TOKEN"]
slack_token = "xoxp-450502245042-462005553123-493155721522-c0832279f76e79f3b574266272fb4774"
sc = SlackClient(slack_token)

channels =  sc.api_call("channels.list")

# Go through all public channels in workspace
for channel in channels['channels']:
  channel_history = sc.api_call(
    "channels.history",
    channel=channel['id']
  )

  # Go through all messages in channel
  for message in channel_history['messages']:

    # Find messages that have reactions
    if 'reactions' in message:
      print("User id: "+message['user'])

      # Go through all reactions of a message and list users who sent reactions
      print("People who interacted with user: "),
      for reaction in message['reactions']:
        for user in reaction['users']:
          print user,
      print("\n")