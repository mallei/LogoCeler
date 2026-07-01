import * as TablerIcons from "@tabler/icons-react";
import {
  ActionIcon,
  Group,
  Modal,
  Pagination,
  SimpleGrid,
  Text,
  Tooltip,
} from "@mantine/core";
import { useState } from "react";

interface IconPickerProps {
  opened: boolean;
  onClose: () => void;
  onPick: (icon: TablerIcons.Icon) => void;
}

const iconNames = Object.keys(TablerIcons).filter(
  (key) =>
    key.startsWith("Icon") &&
    !key.endsWith("Filled") &&
    !key.startsWith("IconBrand"),
);

const limit = 64;
const total = iconNames.length;
const totalPages = Math.ceil(total / limit);

export function IconPicker({ opened, onClose, onPick }: IconPickerProps) {
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} - ${Math.min(total, limit * page)} of ${total}`;

  const visibleIconNames = iconNames.slice(
    limit * (page - 1),
    Math.min(total, limit * page),
  );

  return (
    <Modal opened={opened} onClose={onClose} title="Icon Picker" size="auto">
      <SimpleGrid cols={8} spacing="xs">
        {visibleIconNames.map((iconName) => {
          const IconComponent = TablerIcons[
            iconName as keyof typeof TablerIcons
          ] as TablerIcons.Icon;

          return (
            <Tooltip
              key={iconName}
              label={IconComponent.displayName}
              color="blue"
              withArrow
            >
              <ActionIcon
                variant="light"
                color="gray"
                size="xl"
                onClick={() => onPick(IconComponent)}
              >
                <IconComponent strokeWidth={1.75} />
              </ActionIcon>
            </Tooltip>
          );
        })}
      </SimpleGrid>
      <Group justify="flex-end" mt="sm">
        <Text span size="sm">
          {message}
        </Text>
        <Pagination
          total={totalPages}
          value={page}
          onChange={setPage}
          withPages={false}
        />
      </Group>
    </Modal>
  );
}
