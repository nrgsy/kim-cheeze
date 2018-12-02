from github import Github

# First create a Github instance:
# using an access token
g = Github("21275963ff4d633fbd89d914c7a0dcc273f23779")

# List repos:
for repo in g.get_user().get_repos():
  print(repo)

  print("***")

  # List PRs per repo
  for pr in repo.get_pulls(state="all"):
    print("PR title: "+pr.title)

    # Person who submitted PR
    print("Submitted by: "+pr.user.login)

    # Person assigned to review this PR
    if pr.assignee is not None:
      print("Assignee: "+pr.assignee.login)

    # People assigned to review this PR, if more than one
    if len(pr.assignees) > 0:
      print("Assignees: "),
      for user in pr.assignees:
        if user is not None:
          print(user.login),
      print("\n")
    
    # Person who merged the PR
    if pr.merged_by is not None:
      print("Merged by: "+pr.merged_by.login)   

    print("---------------------")
