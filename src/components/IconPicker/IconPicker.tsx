import * as TablerIcons from "@tabler/icons-react";
import {
  ActionIcon,
  Group,
  Modal,
  Pagination,
  SimpleGrid,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { type IconName } from "@/types";
import { DynamicIcon } from "@/components/DynamicIcon/DynamicIcon";

interface IconPickerProps {
  opened: boolean;
  onClose: () => void;
  onPick: (iconName: IconName) => void;
}

const iconNames = (Object.keys(TablerIcons) as IconName[]).filter(
  (key) =>
    key.startsWith("Icon") &&
    !key.endsWith("Filled") &&
    !key.startsWith("IconBrand"),
);

const limit = 64;

export function IconPicker({ opened, onClose, onPick }: IconPickerProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredIcons = useMemo(
    () =>
      iconNames.filter((iconName) =>
        iconName.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  const total = filteredIcons.length;
  const totalPages = Math.ceil(total / limit);

  const visibleIconNames = filteredIcons.slice(
    limit * (page - 1),
    Math.min(total, limit * page),
  );

  return (
    <Modal opened={opened} onClose={onClose} title="Icon Picker" size="auto">
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<TablerIcons.IconSearch size={20} strokeWidth={1.75} />}
        placeholder={`Search ${iconNames.length} icons...`}
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
          setPage(1);
        }}
        mb="sm"
      />
      <SimpleGrid cols={8} spacing="xs">
        {visibleIconNames.map((iconName) => {
          return (
            <Tooltip
              key={iconName}
              label={iconName.split("Icon")[1]}
              color="blue"
              withArrow
            >
              <ActionIcon
                variant="light"
                color="gray"
                size="xl"
                onClick={() => onPick(iconName)}
              >
                <DynamicIcon name={iconName} strokeWidth={1.75} />
              </ActionIcon>
            </Tooltip>
          );
        })}
      </SimpleGrid>
      {total > limit && (
        <Group justify="flex-end" mt="sm">
          <Text span size="sm">
            {`Showing ${limit * (page - 1) + 1} - ${Math.min(total, limit * page)} of ${total}`}
          </Text>
          <Pagination
            total={totalPages}
            value={page}
            onChange={setPage}
            withPages={false}
          />
        </Group>
      )}
    </Modal>
  );
}
