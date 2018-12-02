from github import Github

# First create a Github instance:
# using an access token
g = Github("21275963ff4d633fbd89d914c7a0dcc273f23779")

# Then play with your Github objects:
for repo in g.get_user().get_repos():
  print(repo)

  print("***")
  for pr in repo.get_pulls(state="all"):
    print("PR title: "+pr.title)
    print("Submitted by: "+pr.user.login)

    if pr.assignee is not None:
      print("Assignee: "+pr.assignee.login)

    if len(pr.assignees) > 0:
      print("Assignees: "),
      for user in pr.assignees:
        if user is not None:
          print(user.login),
      print("\n")
    
    if pr.merged_by is not None:
      print("Merged by: "+pr.merged_by.login)   

    print("---------------------")