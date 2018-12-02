from github import Github

# First create a Github instance:
# using an access token
g = Github("d552c470c81b529031761d6519d0ecfc075e7dff")

# Then play with your Github objects:
for repo in g.get_user().get_repos():
    print(repo.name)