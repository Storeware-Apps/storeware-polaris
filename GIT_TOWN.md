# Git Town Documentation

## Overview

Git Town is a powerful Git workflow tool that streamlines branch management, enables stacked branches, and provides advanced Git operations. This repository uses Git Town to enhance our development workflow with features like:

- **Stacked Branch Management**: Create dependent branches that build on top of each other
- **Intelligent Syncing**: Automatically sync branches with their parents and main branch
- **Simplified PR Workflow**: Streamlined creation and management of pull requests
- **Branch Relationship Tracking**: Maintain clear parent-child relationships between branches
- **Automatic Cleanup**: Clean up merged branches automatically

## Why Git Town?

Git Town solves common Git workflow challenges:

1. **Complex Branch Dependencies**: Easily manage feature branches that depend on other feature branches
2. **Merge Conflicts**: Minimize conflicts through intelligent rebasing strategies
3. **Branch Synchronization**: Keep all branches up-to-date with minimal effort
4. **Team Collaboration**: Consistent workflow patterns across the entire team
5. **PR Management**: Streamlined pull request creation and merging

## Installation

Git Town is already installed globally on this system (version 21.2.0). For new team members:

### macOS (Homebrew)

```bash
brew install git-town
```

### Other Platforms

See the [official installation guide](https://www.git-town.com/install) for other platforms.

## Repository Configuration

This repository is already configured with Git Town. The configuration includes:

- **Main Branch**: `main`
- **Feature Sync Strategy**: `rebase` (maintains clean history)
- **Ship Strategy**: `api` (merges PRs via GitHub API)
- **New Branch Sharing**: Automatically pushes new branches to origin
- **GitHub Integration**: Configured for GitHub workflow

## Core Commands

### Creating Branches

#### `git hack <branch-name>`

Creates a new feature branch off the main branch.

```bash
# Create a new feature branch
git hack feature/user-authentication

# This automatically:
# 1. Creates the branch from main
# 2. Pushes it to origin
# 3. Sets up tracking
# 4. Establishes parent-child relationship
```

#### `git append <branch-name>`

Creates a new feature branch as a child of the current branch (stacked branch).

```bash
# On feature/user-authentication branch
git append feature/user-profile

# This creates a stacked branch:
# main -> feature/user-authentication -> feature/user-profile
```

#### `git prepend <branch-name>`

Creates a new feature branch as the parent of the current branch.

```bash
# On feature/user-profile branch
git prepend feature/database-setup

# This creates:
# main -> feature/database-setup -> feature/user-authentication -> feature/user-profile
```

### Syncing Branches

#### `git sync`

Updates the current branch with all relevant changes.

```bash
git sync

# This automatically:
# 1. Fetches latest changes from origin
# 2. Syncs main branch with upstream
# 3. Rebases current branch onto its parent
# 4. Updates all child branches
# 5. Pushes changes to origin
```

#### `git sync --all`

Syncs all local branches.

```bash
git sync --all
```

### Branch Navigation

#### `git switch`

Interactive branch switcher with visual branch hierarchy.

```bash
git switch
# Shows a visual menu of all branches with their relationships
```

### Pull Request Management

#### `git propose`

Creates a pull request for the current branch.

```bash
git propose

# This automatically:
# 1. Pushes the current branch
# 2. Opens GitHub to create a PR
# 3. Sets appropriate base branch (parent branch or main)
```

#### `git ship`

Merges a completed feature branch via GitHub API.

```bash
git ship

# This automatically:
# 1. Merges the PR on GitHub
# 2. Syncs the main branch
# 3. Deletes the local and remote feature branch
# 4. Updates child branches if any
```

## Stacked Branch Workflows

### Creating a Stack

```bash
# Start with main branch
git checkout main

# Create first feature branch
git hack feature/api-foundation

# Make some commits
git add .
git commit -m "Add API foundation"

# Create dependent branch
git append feature/user-endpoints

# Make commits on the dependent branch
git add .
git commit -m "Add user endpoints"

# Create another dependent branch
git append feature/user-validation

# Make commits
git add .
git commit -m "Add user validation"
```

This creates a stack: `main -> feature/api-foundation -> feature/user-endpoints -> feature/user-validation`

### Working with Stacks

```bash
# View the branch hierarchy
git town branch

# Sync the entire stack
git sync

# Switch to any branch in the stack
git switch
# (select from interactive menu)

# Create PR for the bottom of the stack
git checkout feature/api-foundation
git propose

# After the first PR is merged, sync and create next PR
git sync
git checkout feature/user-endpoints
git propose
```

### Managing Stack Changes

```bash
# If you need to make changes to a parent branch:
git checkout feature/api-foundation
# Make changes and commit
git add .
git commit -m "Update API foundation"

# Sync to update all child branches
git sync

# All child branches are automatically rebased onto the updated parent
```

## Branch Management Commands

### `git town branch`

Display the local branch hierarchy and types.

```bash
git town branch
# Shows:
# main
# ├── feature/api-foundation
# │   └── feature/user-endpoints
# │       └── feature/user-validation
# └── feature/other-feature
```

### `git delete <branch-name>`

Remove an obsolete feature branch.

```bash
git town delete feature/completed-feature

# This automatically:
# 1. Deletes the local branch
# 2. Deletes the remote branch
# 3. Updates child branches to point to the parent
```

### `git rename <old-name> <new-name>`

Rename a branch and its tracking branch.

```bash
git town rename feature/old-name feature/new-name
```

## Advanced Commands

### `git compress`

Squash all commits on the current branch down to a single commit.

```bash
git compress
# Useful before creating a PR to clean up commit history
```

### `git diff-parent`

Show the changes committed to a branch (compared to its parent).

```bash
git diff-parent
# Shows only the changes made on this branch, not inherited from parent
```

### `git set-parent <parent-branch>`

Set the parent branch for the current branch.

```bash
git set-parent feature/new-parent
# Changes the parent-child relationship
```

### `git swap`

Swap the position of this branch with its parent.

```bash
# On feature/child-branch
git swap
# Swaps positions in the stack
```

## Error Recovery

### `git town continue`

Resume the last Git Town command after resolving conflicts.

```bash
# If a sync or other command encounters conflicts:
# 1. Resolve conflicts manually
# 2. Stage resolved files: git add .
# 3. Continue the operation
git town continue
```

### `git town undo`

Undo the most recent Git Town command.

```bash
git town undo
# Reverts the last Git Town operation
```

### `git town status`

Display the current suspended Git Town command.

```bash
git town status
# Shows if there's a suspended operation and how to resolve it
```

## Configuration Management

### `git town config`

Display your Git Town configuration.

```bash
git town config
# Shows all current settings
```

### Common Configuration Changes

```bash
# Set a different main branch
git town config main-branch develop

# Change sync strategy for feature branches
git town config feature-sync-strategy merge

# Configure GitHub token for API operations
git town config github-token <your-token>
```

## Team Best Practices

### 1. Consistent Branch Naming

Use consistent branch naming patterns:

- `feature/description` for new features
- `bugfix/description` for bug fixes
- `hotfix/description` for urgent fixes

### 2. Small, Focused Branches

Keep branches small and focused on a single feature or fix.

### 3. Regular Syncing

Sync branches regularly to avoid large merge conflicts:

```bash
# Sync at least daily
git sync
```

### 4. Stacked Branch Strategy

Use stacked branches for large features:

- Break large features into logical, dependent pieces
- Each branch should be reviewable independently
- Create PRs from bottom to top of the stack

### 5. Clean Commit History

Use `git compress` before creating PRs to maintain clean history.

## Troubleshooting

### Common Issues

#### 1. Merge Conflicts During Sync

```bash
# When conflicts occur during sync:
# 1. Resolve conflicts in your editor
# 2. Stage resolved files
git add .
# 3. Continue the sync
git town continue
```

#### 2. Accidentally Deleted Branch

```bash
# Undo the last Git Town command
git town undo
```

#### 3. Wrong Parent Branch

```bash
# Change the parent of current branch
git set-parent correct-parent-branch
```

#### 4. Suspended Git Town Operation

```bash
# Check what operation is suspended
git town status

# Continue the operation after resolving issues
git town continue

# Or skip the current branch if needed
git town skip
```

### Getting Help

```bash
# General help
git town help

# Help for specific command
git town help sync
git town help hack
```

## Integration with CI/CD

Git Town works seamlessly with existing CI/CD pipelines:

1. **Branch Protection**: Configure branch protection rules on GitHub
2. **Status Checks**: Git Town respects required status checks before merging
3. **Auto-merge**: Use `git ship` only after all checks pass

## Real-World Workflow Examples

### Example 1: Simple Feature Development

```bash
# Start a new feature
git hack feature/add-search-functionality

# Make changes and commit
git add .
git commit -m "Add basic search structure"
git commit -m "Implement search algorithm"
git commit -m "Add search tests"

# Create pull request
git propose

# After review and approval, ship the feature
git ship
```

### Example 2: Complex Feature with Stacked Branches

```bash
# Create the foundation branch
git hack feature/payment-system

# Implement basic payment structure
git add .
git commit -m "Add payment models and interfaces"

# Create dependent branch for payment processing
git append feature/payment-processing

# Implement payment processing logic
git add .
git commit -m "Add payment processor"
git commit -m "Add payment validation"

# Create another dependent branch for payment UI
git append feature/payment-ui

# Implement payment UI
git add .
git commit -m "Add payment form components"
git commit -m "Add payment confirmation UI"

# View the complete stack
git town branch
# Output:
# main
# └── feature/payment-system
#     └── feature/payment-processing
#         └── feature/payment-ui

# Create PRs from bottom to top
git checkout feature/payment-system
git propose

# After first PR is merged, sync and create next PR
git sync
git checkout feature/payment-processing
git propose

# Continue until all branches are merged
```

### Example 3: Handling Changes in Parent Branch

```bash
# You're working on feature/payment-ui
# But need to make changes to feature/payment-system

# Switch to the parent branch
git checkout feature/payment-system

# Make necessary changes
git add .
git commit -m "Fix payment model validation"

# Sync to update all child branches
git sync

# All child branches are automatically rebased with the changes
# Continue working on feature/payment-ui
git checkout feature/payment-ui
```

### Example 4: Emergency Hotfix Workflow

```bash
# Create hotfix branch from main
git hack hotfix/critical-security-fix

# Make the fix
git add .
git commit -m "Fix critical security vulnerability"

# Create PR immediately
git propose

# After approval, ship immediately
git ship

# Sync all other branches to get the hotfix
git sync --all
```

## Git Town Configuration File

This repository uses a `.git-branches.toml` file to store Git Town configuration:

```toml
# Current configuration for storeware-polaris
[branches]

[config]
main-branch = "main"
feature-sync-strategy = "rebase"
perennial-sync-strategy = "rebase"
ship-strategy = "api"
sync-tags = true
sync-with-upstream = true
share-new-branches = true
```

## Aliases and Shortcuts

Git Town provides several command aliases for common operations:

```bash
# Short aliases for common commands
git hack     # Create new feature branch
git sync     # Sync current branch
git propose  # Create pull request
git ship     # Merge and cleanup branch

# Branch management
git append   # Create child branch
git prepend  # Create parent branch
git delete   # Delete branch safely
```

## Performance Tips

### 1. Use `git sync` Regularly

```bash
# Sync daily to avoid large conflicts
git sync

# Or sync all branches weekly
git sync --all
```

### 2. Compress Commits Before PR

```bash
# Clean up commit history before review
git compress
```

### 3. Use Stacked Branches for Large Features

```bash
# Instead of one large branch, create a stack:
git hack feature/large-feature-foundation
git append feature/large-feature-part-1
git append feature/large-feature-part-2
```

## Monitoring and Debugging

### Check Git Town Status

```bash
# See current Git Town state
git town status

# View branch relationships
git town branch

# Check configuration
git town config
```

### Debug Git Town Operations

```bash
# View detailed logs of Git Town operations
git town runlog

# See what Git Town would do without executing
git town sync --dry-run  # (if available in your version)
```

## Migration Guide

### From Standard Git Workflow

If you're migrating from a standard Git workflow:

1. **Install Git Town** (already done for this repo)
2. **Learn Core Commands**: Start with `git hack`, `git sync`, and `git ship`
3. **Adopt Stacked Branches**: Use `git append` for dependent features
4. **Use Git Town for PRs**: Replace manual PR creation with `git propose`

### From Other Git Tools

If you're coming from other Git workflow tools:

- **Git Flow**: Git Town is simpler and more flexible
- **GitHub Flow**: Git Town adds stacked branches and better sync
- **GitLab Flow**: Similar benefits with better branch management

## Security Considerations

### GitHub Token Configuration

For API operations (like `git ship`), you may need to configure a GitHub token:

```bash
# Set GitHub token for API operations
git town config github-token <your-personal-access-token>

# Or use GitHub CLI (gh) for authentication
# Git Town will automatically use gh if available
```

### Branch Protection

Ensure branch protection rules are configured on GitHub:

- Require pull request reviews
- Require status checks to pass
- Restrict pushes to main branch

## Additional Resources

- [Official Git Town Documentation](https://www.git-town.com/)
- [Git Town GitHub Repository](https://github.com/git-town/git-town)
- [Git Town Configuration Reference](https://www.git-town.com/configuration)
- [Git Town Command Reference](https://www.git-town.com/commands)

## Support and Contribution

### Getting Help

1. **Check this documentation** for common workflows and troubleshooting
2. **Use built-in help**: `git town help <command>`
3. **Check Git Town status**: `git town status`
4. **Ask the team** for workflow-specific questions

### Contributing to This Documentation

This documentation should be updated as our workflow evolves:

1. Create a branch: `git hack docs/update-git-town-docs`
2. Update this file with new examples or clarifications
3. Create a PR: `git propose`
4. After review: `git ship`

---

_This documentation is specific to the storeware-polaris repository configuration. Last updated: July 2025_
