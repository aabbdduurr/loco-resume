import {
    Header,
    Group,
    Flex,
    ActionIcon,
    useMantineColorScheme,
    Title,
    Avatar,
    Center,
} from '@mantine/core'

import {
    IconBrandGithub,
    IconMoonStars,
    IconSettings,
    IconSun,
} from '@tabler/icons'

import useStyles from '@styles/components/head.styles'
import { LocoLogo } from '@lib/_svg'

function Head() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'
    return (
        <Header height={60}>
            <Flex
                sx={{
                    height: 60,
                    maxWidth: 1320,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: 16,
                    paddingRight: 16,
                }}
                gap="xl"
                justify="space-between"
                align="center"
                direction="row"
                wrap="nowrap"
            >
                <Group spacing="xs">
                    <Avatar variant="filled" radius="md" color="blue">
                        <Center sx={{ width: 30 }}>
                            <LocoLogo></LocoLogo>
                        </Center>
                    </Avatar>

                    <Title
                        weight={600}
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                        transform="uppercase"
                        size={22}
                    >
                        Loco Resume
                    </Title>
                </Group>
                <Group
                    position="right"
                    spacing="sm"
                    sx={{ maxWidth: 300, minWidth: 180 }}
                >
                    <ActionIcon variant="default" size="lg" radius="md">
                        <IconBrandGithub size={22} strokeWidth={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        radius="md"
                        variant="default"
                        size="lg"
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <IconSun size={22} strokeWidth={1.5} />
                        ) : (
                            <IconMoonStars size={22} strokeWidth={1.5} />
                        )}
                    </ActionIcon>
                    <ActionIcon variant="default" size="lg" radius="md">
                        <IconSettings size={22} strokeWidth={1.5} />
                    </ActionIcon>
                </Group>
            </Flex>
        </Header>
    )
}

export default Head
