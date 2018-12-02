import os
from slackclient import SlackClient
import pprint

# slack_token = os.environ["SLACK_API_TOKEN"]
slack_token = "xoxp-450502245042-462005553123-493155721522-c0832279f76e79f3b574266272fb4774"
sc = SlackClient(slack_token)

channels =  sc.api_call("channels.list")


for channel in channels['channels']:
  channel_history = sc.api_call(
    "channels.history",
    channel=channel['id']
  )

  # if channel['id'] =="CEH1R2MA7":
  for message in channel_history['messages']:
    if 'reactions' in message:
      print("User id: "+message['user'])
      print("People who interacted with user: "),
      for reaction in message['reactions']:
        for user in reaction['users']:
          print user,
      print("\n")