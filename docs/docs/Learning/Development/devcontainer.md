# Developing On Remote DevContainers

## Using VSCode DevContainers

1. Install the CLI

```bash
npm install -g @devcontainers/cli
```

2. Create the config file

```json
{
    "name": "farris",
    "build": {
        "dockerfile": "devcontainer.Dockerfile"
    },
    "runArgs": [
        "--name",
        "lfarris-devcontainer"
    ],
    "workspaceMount": "source=${localWorkspaceFolder},target=/workspace/lfarris,type=bind,consistency=cached",
    "workspaceFolder": "/workspace/lfarris",
    "customizations": {
        "vscode": {
            "extensions": [
                "ms-python.python"
            ]
        }
    },
    "remoteUser": "root"
}
```


3. Create the Dockerfile

```Dockerfile
FROM mcr.microsoft.com/devcontainers/base:2.1.7-ubuntu24.04
ARG DEBIAN_FRONTEND=noninteractive
ARG USER=vscode
RUN DEBIAN_FRONTEND=noninteractive \
    && apt-get update \ 
    && apt-get install -y build-essential --no-install-recommends make \
        ca-certificates \
        git \
        libssl-dev \
        zlib1g-dev \
        libbz2-dev \
        libreadline-dev \
        libsqlite3-dev \
        wget \
        curl \
        llvm \
        libncurses5-dev \
        xz-utils \
        tk-dev \
        libxml2-dev \
        libxmlsec1-dev \
        libffi-dev \
        liblzma-dev
USER $USER
ARG HOME="/home/$USER"
ARG PYTHON_VERSION=3.11
ENV PYENV_ROOT="${HOME}/.pyenv"
ENV PATH="${PYENV_ROOT}/shims:${PYENV_ROOT}/bin:${HOME}/.local/bin:$PATH"
RUN echo "done 0" \
    && curl https://pyenv.run | bash \
    && echo "done 1" \
    && pyenv install ${PYTHON_VERSION} \
    && echo "done 2" \
    && pyenv global ${PYTHON_VERSION} \
    && echo "done 3" \
    && curl -sSL https://install.python-poetry.org | python3 - \
    && poetry config virtualenvs.in-project true
```

4. Start the container

```bash
 devcontainer up --gpu-availability="all" --workspace-folder .
```

The first time you run will take a few minutes for VSCode to set it up (post-install scripts). Subsequent connections will be instant.

If you need to make changes, include the `--remove-existing-container` flag, like so:

```bash
devcontainer up --gpu-availability="all" --remove-existing-container --workspace-folder . 
```

5. Attach to container

In VSCode, open the Command Palette (Ctrl+Shift+P) and select "Remote-Containers: Attach to Running Container..." then select your container from the list. It will be called `vsc-...`

Your work will be available at `/workspace` inside the container.